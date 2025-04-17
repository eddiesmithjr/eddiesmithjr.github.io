import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    softwareRequest: '',
    timeline: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.softwareRequest.trim()) {
      newErrors.softwareRequest = 'Software request is required';
    }
    
    if (!formData.timeline.trim()) {
      newErrors.timeline = 'Timeline is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        softwareRequest: '',
        timeline: ''
      });
    }
  };

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ marginBottom: '80px' }}
    >
      <style>
        {`
          .cta-action input::placeholder {
            color: #666;
            opacity: 1;
          }
          .cta-action input::-webkit-input-placeholder {
            color: #666;
            opacity: 1;
          }
          .cta-action input::-moz-placeholder {
            color: #666;
            opacity: 1;
          }
          .cta-action input:-ms-input-placeholder {
            color: #666;
            opacity: 1;
          }
          .cta-action input:-moz-placeholder {
            color: #666;
            opacity: 1;
          }
          .container {
            max-width: 100%;
            padding: 0;
            margin: 0 auto;
          }
          .cta-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
            padding: 0;
            margin: 0 auto;
          }
          .cta-slogan {
            margin-bottom: 32px;
            max-width: 800px;
            width: 100%;
            padding: 0;
          }
          .cta-slogan h3 {
            font-size: 1.5rem;
            white-space: nowrap;
          }
          .cta-action {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            margin: 0 auto;
            justify-content: center;
          }
          .cta-action form {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .form-group {
            margin-bottom: 16px;
            width: 100%;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .form-group input {
            width: 100%;
            max-width: 400px;
          }
          .button-primary {
            background-color: #e0e0e0;
            color: #333;
            border: none;
            margin: 0 auto;
          }
          .button-primary:hover {
            background-color: #d0d0d0;
          }
        `}
      </style>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">
              Request Custom Software Development
            </h3>
          </div>
          <div className="cta-action">
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <div className="form-group">
                <Input
                  id="name"
                  type="text"
                  label="Name"
                  labelHidden
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>
              <div className="form-group">
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  labelHidden
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <Input
                  id="softwareRequest"
                  type="text"
                  label="Software Request"
                  labelHidden
                  placeholder="Describe your software needs"
                  value={formData.softwareRequest}
                  onChange={handleChange}
                  error={errors.softwareRequest}
                />
                {errors.softwareRequest && <div className="form-error">{errors.softwareRequest}</div>}
              </div>
              <div className="form-group">
                <Input
                  id="timeline"
                  type="text"
                  label="Timeline"
                  labelHidden
                  placeholder="Expected timeline for completion"
                  value={formData.timeline}
                  onChange={handleChange}
                  error={errors.timeline}
                />
                {errors.timeline && <div className="form-error">{errors.timeline}</div>}
              </div>
              <div className="form-group">
                <button className="button button-primary button-wide-mobile" type="submit">
                  Submit Request
                </button>
              </div>
              {isSubmitted && (
                <div className="form-success">
                  Thank you! Your request has been submitted successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;