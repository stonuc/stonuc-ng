import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface ContactFormEmailProps {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  
  export const ContactFormEmailEmail = ({
    name,
    email,
    phone,
    message,
  }: ContactFormEmailProps) => (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new message from the contact form on your website.
          </Text>
          <Section style={section}>
            <Text style={sectionHeader}>Contact Details:</Text>
            <Text style={sectionContent}>Name: {name}</Text>
            <Text style={sectionContent}>Email: {email}</Text>
            <Text style={sectionContent}>Phone: {phone}</Text>
          </Section>
          <Section style={section}>
            <Text style={sectionHeader}>Message:</Text>
            <Text style={sectionContent}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            This email was sent from the contact form on your website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
  };
  
  const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '32px',
    paddingBottom: '16px',
  };
  
  const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '24px',
    paddingBottom: '16px',
  };
  
  const section = {
    padding: '24px',
    border: '1px solid #dedede',
    borderRadius: '5px',
    marginBottom: '24px',
  };
  
  const sectionHeader = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };
  
  const sectionContent = {
    margin: '0',
    padding: '0',
    fontSize: '14px',
    lineHeight: '21px',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };