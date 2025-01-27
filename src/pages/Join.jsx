import React, { useState } from 'react';

const SimpleJoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    id:'',
    email: '',
    joinConfirmation: false,
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    const formSubmission = new FormData();
    // Add access key
    formSubmission.append('access_key', '6c089b37-eef1-4256-8a21-c8e5b2381c94');

    // Add form fields
    Object.entries(formData).forEach(([key, value]) => {
      formSubmission.append(key, value);
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formSubmission,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Thank you for your application! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          id:'',
          email: '',
          joinConfirmation: false,
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus(
        'Failed to submit. Please check your connection and try again.'
      );
    }
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center -mt-20 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow'>
        <div>
          <h2 className='text-center text-3xl font-bold text-gray-900'>
            Join MUN AUI
          </h2>
          <p className='mt-2 text-center text-gray-600'>
            Fill out this form to join our community
          </p>
        </div>

        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Full Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                value={formData.name}
                onChange={handleChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Your ID
              </label>
              <input
                id='id'
                name='id'
                type='text'
                required
                value={formData.id}
                onChange={handleChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email Address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

         

            <div className='flex items-center'>
              <input
                id='joinConfirmation'
                name='joinConfirmation'
                type='checkbox'
                required
                checked={formData.joinConfirmation}
                onChange={handleChange}
                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
              />
              <label
                htmlFor='joinConfirmation'
                className='ml-2 block text-sm text-gray-700'
              >
                I want to join AUI MUN
              </label>
            </div>
          </div>

          {status && (
            <div
              className={`text-center p-3 rounded-md ${
                status.includes('thank you')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {status}
            </div>
          )}

          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none'
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleJoinForm;
