"use client";

import { useRouter } from 'next/navigation'
import React from 'react'

export default function ModalBackdrop() {
    const router = useRouter();
    return (
        <div className="modal-backdrop" onClick={router.back} />
    )
}
