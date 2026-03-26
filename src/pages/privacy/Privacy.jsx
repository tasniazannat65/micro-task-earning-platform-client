import React from 'react';
import Container from '../../components/shared_component/Container';

const Privacy = () => {
    return (
      <div className="min-h-screen  text-base-content  py-12">
              <title>Zantaskly || Privacy Page </title>

<Container>
<h1 className="text-5xl font-bold text-primary mb-6">🔒 Privacy Policy</h1>



<div className="space-y-5">
<p className='text-xl font-medium'>
Your privacy is important to us. This policy explains how Zantaskly collects, uses, and protects your information.
</p>


<h2 className="text-3xl font-semibold text-secondary">1. Information We Collect</h2>
<ul className="list-disc pl-6 space-y-2 text-xl font-medium">
<li>Basic account details (name, email).</li>
<li>Usage data and activity within the platform.</li>
<li>Technical information such as browser type and device data.</li>
</ul>


<h2 className="text-3xl font-semibold text-secondary">2. How We Use Information</h2>
<ul className="list-disc pl-6 space-y-2 text-xl font-medium">
<li>To provide and improve our services.</li>
<li>To communicate updates or important notices.</li>
<li>To maintain platform security.</li>
</ul>


<h2 className="text-3xl font-semibold text-secondary">3. Data Protection</h2>
<p className='text-xl font-medium'>
We implement appropriate security measures to protect your data from unauthorized access or disclosure.
</p>


<h2 className="text-3xl font-semibold text-secondary">4. Third-Party Services</h2>
<p className='text-xl font-medium'>
We may use trusted third-party services for authentication or analytics, which follow their own privacy policies.
</p>


<h2 className="text-3xl font-semibold text-secondary">5. Policy Updates</h2>
<p className='text-xl font-medium'>
We may update this Privacy Policy from time to time. Continued use of Zantaskly means acceptance of changes.
</p>
</div>




</Container>
</div>
    );
};

export default Privacy;