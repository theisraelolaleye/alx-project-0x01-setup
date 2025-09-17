import React from 'react'
import { UserProps } from '@/interfaces';
// import Image from 'next/image';

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="user-card" style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, maxWidth: 350 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        {/* <Image
          src={`https://api.dicebear.com/7.x/identicon/svg?seed=${username}`}
          alt={name}
          width={48}
          height={48}
          style={{ borderRadius: '50%', marginRight: 16 }}
        /> */}
        <div>
          <h2 style={{ margin: 0 }}>{name}</h2>
          <p style={{ margin: 0, color: '#555' }}>@{username}</p>
        </div>
      </div>
      <div style={{ marginBottom: 8 }}>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div style={{ marginBottom: 8 }}>
        <strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <div style={{ marginBottom: 8 }}>
        <strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
      </div>
      <div style={{ marginBottom: 8 }}>
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </div>
      <div>
        <strong>Company:</strong> {company.name}
        <div style={{ fontSize: 12, color: '#888' }}>{company.catchPhrase}</div>
      </div>
    </div>
   
  )
}

export default UserCard