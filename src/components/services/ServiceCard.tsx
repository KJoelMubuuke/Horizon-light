import React from 'react';

type Props = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  imageOnly?: boolean;
};
export default function ServiceCard({ title = '', description = '', icon, image, imageOnly }: Props) {
  const imageClass = imageOnly ? 'img-thumb-md' : 'img-thumb-sm';
  return (
    <div style={{ padding: 0, borderRadius: 8, background: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
      {image ? (
        <div className={"w-full overflow-hidden"} style={{ borderRadius: 0 }}>
          <img src={`/Genesis-events/${encodeURIComponent(image)}`} alt={title} className={`w-full ${imageClass} img-cover`} />
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
