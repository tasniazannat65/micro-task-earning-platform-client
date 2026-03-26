import React from 'react';
import Container from '../../components/shared_component/Container';

const Terms = () => {
    return (
        <div className="min-h-screen  text-base-content  py-12">
                  <title>Zantaskly || Terms Page </title>

<Container>
<h1 className="text-5xl font-bold text-primary mb-6">📜 Terms & Conditions</h1>



<div className=" space-y-5">
<p className='text-xl font-medium'>
By accessing and using Zantaskly, you agree to comply with the following terms and conditions.
</p>


<h2 className="text-3xl font-semibold text-secondary">1. Use of the Platform</h2>
<p className='text-xl font-medium'>
You agree to use Zantaskly only for lawful purposes and in a way that does not harm the platform or other users.
</p>


<h2 className="text-3xl font-semibold text-secondary">2. User Accounts</h2>
<ul className="list-disc pl-6 space-y-2 text-xl font-medium">
<li>You are responsible for maintaining your account credentials.</li>
<li>All information provided must be accurate and up to date.</li>
<li>We reserve the right to suspend accounts that violate our policies.</li>
</ul>


<h2 className="text-3xl font-semibold text-secondary">3. Intellectual Property</h2>
<p className='text-xl font-medium'>
All content, branding, and design elements on Zantaskly are the property of the platform unless otherwise stated.
</p>


<h2 className="text-3xl font-semibold text-secondary">4. Limitation of Liability</h2>
<p className='text-xl font-medium'>
Zantaskly is provided "as is" without warranties. We are not responsible for any damages arising from platform usage.
</p>


<h2 className="text-3xl font-semibold text-secondary">5. Updates to Terms</h2>
<p className='text-xl font-medium'>
We may update these terms at any time. Continued use of the platform means you accept the updated terms.
</p>
</div>




</Container>
</div>
    );
};

export default Terms;