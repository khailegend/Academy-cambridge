import FAQAndContact from '@/components/FAQ-Contact'
import React from 'react'
import {NextSeo} from "next-seo";

export default function Contact() {
    return (
      <>
          <NextSeo
            title="Liện hệ Cambridge Academy"
            description="CAMBRIDGE ACADEMY - cùng học sinh chinh phục từng cột mốc tri thức"
          />

          <FAQAndContact />
      </>
    )
}
