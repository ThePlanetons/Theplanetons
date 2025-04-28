import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { SocialProfile } from './types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface SocialProfileCardProps {
  profile: SocialProfile;
}

const SocialProfileCard: React.FC<SocialProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={profile.image} 
          alt={profile.name} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold">{profile.name}</h3>
            <p className="text-gray-600">@{profile.username}</p>
          </div>
          {profile.followers && (
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              <span>{profile.followers}</span>
            </div>
          )}
        </div>
        <p className="text-gray-700 mb-4">{profile.description}</p>
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-blue-600 hover:text-blue-800 transition-colors">
                View Details
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-2xl mb-4">{profile.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">About {profile.name}</h4>
                  <p className="text-gray-600 mb-4">{profile.description}</p>
                  {profile.content && (
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold">Content Highlights</h5>
                      <div className="grid grid-cols-2 gap-4">
                        {profile.content.map((item, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-48 object-cover rounded-lg mb-3"
                            />
                            <h6 className="font-medium">{item.title}</h6>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <a 
            href={profile.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Visit profile <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialProfileCard;