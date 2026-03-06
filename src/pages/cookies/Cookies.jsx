import React from 'react';
import Container from '../../components/shared_component/Container';

const Cookies = () => {
    return (
       <div className="min-h-screen  text-base-content  py-12">
<Container>
<h1 className="text-5xl font-bold text-primary mb-6">🍪 Cookies Policy</h1>



<div className=" space-y-5">
<p className='text-xl font-medium'>
This Cookies Policy explains how Zantaskly uses cookies and similar technologies to enhance your experience.
</p>


<h2 className="text-3xl font-semibold text-secondary">1. What Are Cookies?</h2>
<p className='text-xl font-medium'>
Cookies are small text files stored on your device to help websites remember information about your visit.
</p>


<h2 className="text-3xl font-semibold text-secondary">2. How We Use Cookies</h2>
<ul className="list-disc pl-6 space-y-2 text-xl font-medium">
<li>To keep you logged in securely.</li>
<li>To remember your preferences (such as theme settings).</li>
<li>To analyze traffic and improve performance.</li>
</ul>


<h2 className="text-3xl font-semibold text-secondary">3. Managing Cookies</h2>
<p className='text-xl font-medium'>
You can control or disable cookies through your browser settings. Disabling cookies may affect some features of the platform.
</p>


<h2 className="text-3xl font-semibold text-secondary">4. Updates</h2>
<p className='text-xl font-medium'>
We may update this Cookies Policy when necessary. Please review it periodically for changes.
</p>
</div>




</Container>
</div>
    );
};

export default Cookies;