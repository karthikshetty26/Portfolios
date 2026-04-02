"use client"
import { useState } from 'react';
import { PROFILE, UI_TEXT } from '@/config/site';
import HOMECSS from '@/app/Landing.module.css';

/**
 * CopyEmailButton - Interactive component for copying email to clipboard
 * Isolated client component for minimal hydration overhead
 */
export default function CopyEmailButton() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(PROFILE.email)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 4000);
      })
      .catch((err) => console.error(UI_TEXT.EMAIL_COPY_ERROR, err));
  };

  return (
    <>
      <button
        className={HOMECSS.gmail}
        title={UI_TEXT.COPY_EMAIL_BUTTON_TITLE}
        onClick={handleCopyEmail}
        type="button"
      >
        <span className={HOMECSS.gmail}>{UI_TEXT.CONTACT_EMAIL_BUTTON_TEXT}</span>
        <span className={HOMECSS.gmail}> {PROFILE.email}</span>
      </button>
      <div className={`${HOMECSS.toast_div} ${copySuccess ? HOMECSS.show : ''}`}>
        <div className={HOMECSS.toast_messages}>{UI_TEXT.TOAST_COPY_EMAIL}</div>
      </div>
    </>
  );
}
