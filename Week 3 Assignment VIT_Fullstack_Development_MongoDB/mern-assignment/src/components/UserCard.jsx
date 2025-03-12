const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md w-64 text-center">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-500">{email}</p>
    </div>
  );
};

export default UserCard;
