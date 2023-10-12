import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import HadiTitle from '../components/HadiTitle'
import HadiDot from '../components/HadiDot'

export default function page() {
  return (
    <div className="mb-14">
      <p className="text-center  text-lg px-12 md:px-40 mt-5">
        To ensure the success and impact of the ”Quantum Software Engineering
        Summit,” we are excited to offer a range of sponsorship opportunities
        for organizations and companies that share our vision and are interested
        in actively participating in this groundbreaking event. By becoming a
        sponsor, you not only contribute to the advancement of quantum software
        engineering but also gain valuable exposure and benefits for your
        organization. Below are the detailed sponsorship packages and
        opportunities available:
      </p>
      <div className="px-12 md:px-40 my-6 w-full h-full flex gap-6">
        <div className="flex-1 space-y-3">
          <div className="border rounded-md shadow-lg p-4  space-x-1">
            <HadiTitle title="Diamond Sponsorship:"></HadiTitle> Our highest
            level of sponsorship, the Diamond Sponsorship, provides your
            organization with maximum visibility and exclusive benefits. As a
            Diamond Sponsor, you will enjoy:
            <div className="mt-1">
              <HadiDot /> Exclusive recognition as the Diamond Sponsor on all
              conference materials, including the conference website,
              promotional materials, and signage.
            </div>
            <div>
              <HadiDot /> Priority placement of your organization’s logo and
              branding on the conference website, with a dedicated section
              highlighting your support.
            </div>
            <div>
              <HadiDot /> A prominent speaking slot during the conference,
              allowing you to showcase your organization’s expertise and
              initiatives.
            </div>{' '}
            <div>
              <HadiDot /> Exclusive access to a premium exhibitor booth space,
              ensuring high visibility to all conference attendees.{' '}
            </div>
            <div>
              <HadiDot /> Recognition as the Diamond Sponsor during the opening
              and closing ceremonies of the conference.{' '}
            </div>
            <div>
              <HadiDot /> Five complimentary conference registrations for your
              team members.
            </div>{' '}
            <HadiDot /> Acknowledgment and thanks in all press releases and
            media coverage.
            <div>
              <HadiDot /> Opportunity to contribute a full-page advertisement or
              article in the conference program booklet.
            </div>
          </div>
          <div className="border rounded-md shadow-lg p-4">
            <HadiTitle title="Gold Sponsorship:"></HadiTitle> Our Gold
            Sponsorship offers substantial exposure and benefits to your
            organization, including:
            <div>
              <HadiDot /> Recognition as a Gold Sponsor on the conference
              website and promotional materials.
            </div>{' '}
            <div>
              <HadiDot /> Placement of your organization’s logo and branding on
              the conference website.
            </div>
            <div>
              {' '}
              <HadiDot /> An opportunity to present a brief overview of your
              organization during a session.
            </div>
            <div>
              {' '}
              <HadiDot /> Access to an exhibitor booth space.
            </div>
            <div>
              {' '}
              <HadiDot />
              Recognition as a Gold Sponsor during the opening ceremony
            </div>
            <div>
              {' '}
              <HadiDot /> Three complimentary conference registrations for your
              team members.
            </div>
            <div>
              {' '}
              <HadiDot /> Acknowledgment in press releases and media coverage.
            </div>
            <div>
              {' '}
              <HadiDot />
              Opportunity to contribute a quarter-page advertisement or article
              in the conference program booklet.
            </div>
          </div>
        </div>
        <div className="space-y-3 flex-1 ">
          <div className="border rounded-md shadow-lg p-4">
            <HadiTitle title="Platinum Sponsorship:"></HadiTitle> As a Platinum
            Sponsor, your organization will play a vital role in supporting the
            conference while enjoying significant benefits, including:
            <div>
              <HadiDot /> Prominent recognition as a Platinum Sponsor on the
              conference website and promotional materials.
            </div>
            <div>
              <HadiDot /> Prime placement of your organization’s logo and
              branding on the conference website.
            </div>
            <div>
              {' '}
              <HadiDot />A speaking slot during a dedicated session or panel
              discussion
            </div>
            <div>
              <HadiDot /> Access to an exhibitor booth space in a high-traffic
              area
            </div>
            <div>
              <HadiDot /> Recognition as a Platinum Sponsor during the opening
              ceremony.
            </div>
            <div>
              <HadiDot /> Four complimentary conference registrations for your
              team members
            </div>
            <div>
              {' '}
              <HadiDot /> Acknowledgment in press releases and media coverage.
            </div>
            <div>
              <HadiDot /> Opportunity to contribute a half-page advertisement or
              article in the conference program booklet.
            </div>
          </div>
          <div className="border rounded-md shadow-lg p-4">
            <HadiTitle title="Silver Sponsorship:"></HadiTitle> is an excellent
            opportunity for organizations looking to support the conference and
            gain visibility. Benefits include:
            <div>
              <HadiDot /> Recognition as a Silver Sponsor on the conference
              website and promotional materials.
            </div>{' '}
            <div>
              <HadiDot /> Listing of your organization’s name and logo on the
              conference website.
            </div>
            <div>
              {' '}
              <HadiDot /> Access to an exhibitor booth space.
            </div>
            <div>
              {' '}
              <HadiDot /> Recognition as a Silver Sponsor during the opening
              ceremony
            </div>
            <div>
              {' '}
              <HadiDot />
              Two complimentary conference registrations for your team members.
            </div>
          </div>
          <div className="border rounded-md shadow-lg p-4">
            <HadiTitle title="Bronze Sponsorship:"></HadiTitle> The Bronze
            Sponsorship is designed for organizations seeking to participate in
            the conference and showcase their support. Benefits include:
            <div>
              <HadiDot /> Recognition as a Bronze Sponsor on the conference
              website and promotional materials.
            </div>{' '}
            <div>
              <HadiDot /> Listing of your organization’s name on the conference
              website.
            </div>
            <div>
              {' '}
              <HadiDot /> One complimentary conference registration for your
              team member.
            </div>
          </div>
        </div>
      </div>
      <div className="px-40">
        <div className="border p-4 text-center shadow-xl rounded mt-3">
          We welcome your organization’s participation in the ”Quantum Software
          Engineering Summit” as a sponsor. Your support not only contributes to
          the success of the event but also showcases your commitment to
          advancing the field of quantum software engineering. We look forward
          to partnering with you and making this conference a resounding
          success.
          <Link href={'https://forms.gle/4GxmaaARvsGtNXML9'} className="block">
            <Button
              variant={'default'}
              className="bg-sky-600 text-white text-xl mt-2"
            >
              Fill The Form
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
