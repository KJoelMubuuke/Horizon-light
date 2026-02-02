import React from 'react';

type Props = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  imageOnly?: boolean;
};
export default function ServiceCard({ title = '', description = '', icon, image, imageOnly }: Props) {
  const imageHeight = imageOnly ? 180 : 100;

  return (
    <div style={{ padding: 0, borderRadius: 8, background: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
      {image ? (
        <div style={{ width: '100%', height: imageHeight, overflow: 'hidden' }}>
          <img src={`/Genesis-events/${encodeURIComponent(image)}`} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      ) : (
        icon && <div style={{ padding: 16 }}>{icon}</div>
      )}

      {!imageOnly && (
        <div style={{ padding: 16 }}>
          <h3 style={{ margin: '6px 0 8px' }}>{title}</h3>
          <p style={{ margin: 0 }}>{description}</p>
        </div>
      )}
    </div>
  );
}
