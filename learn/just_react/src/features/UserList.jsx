import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { useEffect } from "react";

const UserList = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.entities);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div>
			<h1>UserList</h1>
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Username</td>
						<td>Email</td>
					</tr>
				</thead>
				<tbody>
					{users &&
						users.map((user) => (
							<tr className="" key={user.id}>
								<td> {user.name}</td>
								<td> {user.username}</td>
								<td> {user.email}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default UserList;
