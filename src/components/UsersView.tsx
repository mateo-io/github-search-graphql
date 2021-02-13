import React from "react"
import { Paper, UsersWrapper } from "../styles/common"
import { UserType } from "../types/common"
import UserComponent from "./UserComponent"

const UsersView = (props: { users: UserType[] }) => {
  const { users } = props
  return (
    <UsersWrapper>
      <Paper>
        {users.map((user) => (
          <UserComponent key={user.login} {...user} />
        ))}
      </Paper>
    </UsersWrapper>
  )
}

export default UsersView
