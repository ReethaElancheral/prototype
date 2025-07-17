import React from 'react';

export default function UserList() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  if (!users.length) {
    return <p className="text-center mt-6">No applications submitted yet.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4">
      {users.map(u => (
        <div key={u.id} className="p-4 border rounded-md flex justify-between items-center">
          <div>
            <div className="font-medium">{u.fullName}</div>
            <div className="text-sm text-gray-600">{u.email}</div>
            <div className="text-sm text-gray-600">{u.phone}</div>
          </div>
          <div>
            <span className="text-sm bg-green-100 px-2 py-1 rounded">🎓 {u.resume}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
