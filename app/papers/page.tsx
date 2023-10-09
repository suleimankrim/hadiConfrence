import React from 'react'

export default function page() {
  return (
    <div>
      <p className="text-center px-40 mt-5">
        We welcome contributions from researchers, academics, and industry
        experts in the fields of quantum computing and software engineering to
        submit their original papers to the Quantum Software Engineering Summit.
        This conference aims to facilitate the exchange of cutting-edge
        research, foster collaboration, and advance the field of quantum
        software engineering.
      </p>
      <div className="px-40 my-6 w-full h-full flex gap-6">
        <div className="border rounded-md shadow-lg p-4">
          Authors are invited to submit their original research papers on a wide
          range of topics related to quantum software engineering, including but
          not limited to:{' '}
          <div>• Quantum algorithms and their practical applications</div>•
          Quantum programming languages, libraries, and frameworks
          <div>
            • Quantum software development methodologies and best practices
          </div>{' '}
          • Quantum machine learning and optimization algorithms • Quantum
          cryptography, security, and post-quantum cryptography •
          <div>
            Interdisciplinary research at the intersection of quantum computing
            and software engineering •
          </div>{' '}
          Quantum hardware and software co-design • Quantum simulation and
          quantum computing in the cloud
        </div>
        <div className="space-x-5">
          <div className="border rounded-md shadow-lg">
            Here are the submission guidelines: • Paper Length: Papers should
            not exceed 20 pages, including figures, tables, and references. •
            Formatting: Please use the conference template for formatting your
            paper. • Review Process: All submissions will undergo a rigorous
            peer-review process. • Publication: Accepted papers will be included
            in the conference proceedings and may be considered for publication
            in a special issue of a reputable journal.
          </div>
          <div className="border rounded-md shadow-lg">
            {' '}
            Important Dates • Expected Paper Submission Deadline: July 2024 •
            Expected Notification of Acceptance: September 2024 • Expected
            Conference Dates: December 2024
          </div>
        </div>
      </div>
    </div>
  )
}
