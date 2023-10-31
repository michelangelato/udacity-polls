const User = (props) => {
	const { user, view } = props;

	return view === 1 ? (
		<span className="user">
			<img className="avatar" src={user.avatarURL} alt={user.name} />
			<span className="user-id">{user.id}</span>
		</span>
	) : view === 2 ? (
		<span className="user">
			<img className="avatar" src={user.avatarURL} alt={user.name} />
			<div className="user-desc">
				<div className="user-id">{user.name}</div>
				<div className="text-secondary">{user.id}</div>
			</div>
		</span>
	) : (
		<div>
			<img className="avatar avatar-lg" src={user.avatarURL} alt={user.name} />
		</div>
	);
};

export default User;
