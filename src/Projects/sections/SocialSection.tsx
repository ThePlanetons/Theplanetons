import React from 'react';
import { socialProfiles } from '../data/social';
import SectionHeading from '../SectionHeading';
import SocialProfileCard from '../SocialProfileCard';

const SocialSection: React.FC = () => {
  return (
    <section id="social" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Social Media Marketing" 
          subtitle="Check out our social media handles here!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialProfiles.map((profile) => (
            <SocialProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;