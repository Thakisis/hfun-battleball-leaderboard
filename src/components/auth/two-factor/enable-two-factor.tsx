'use client';

import { useState } from 'react';

import { generateTwoFactor } from '@/server/actions/auth/two-factor/two-factor';

import { TwoFactorSetup } from './two-factor-setup';
import { TwoFactorVerify } from './two-factor-verify';

interface EnableTwoFactorProps {
  sessionId: string;
  hasTwoFactorToken: boolean;
}

export function EnableTwoFactor({
  sessionId,
  hasTwoFactorToken,
}: EnableTwoFactorProps) {
  const [twoFactorData, setTwoFactorData] = useState<{
    uri: string;
    secret: string;
    qrCode: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateTwoFactor = async () => {
    if (!hasTwoFactorToken) {
      const result = await generateTwoFactor(sessionId);
      if (!result.success || !result.uri || !result.secret || !result.qrCode) {
        setError(
          result.error || 'Failed to generate two-factor authentication',
        );
      } else {
        setTwoFactorData({
          uri: result.uri,
          secret: result.secret,
          qrCode: result.qrCode,
        });
      }
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!hasTwoFactorToken && !twoFactorData) {
    return (
      <button onClick={handleGenerateTwoFactor}>
        Set up Two-Factor Authentication
      </button>
    );
  }

  if (twoFactorData) {
    return (
      <TwoFactorSetup
        uri={twoFactorData.uri}
        secret={twoFactorData.secret}
        qrCode={twoFactorData.qrCode}
        sessionId={sessionId}
      />
    );
  }

  return <TwoFactorVerify sessionId={sessionId} action="enable" />;
}
