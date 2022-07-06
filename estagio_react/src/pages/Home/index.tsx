import User from 'components/User'
import { useEffect, useState } from 'react'
import { api } from 'services/api'
import { IUser } from 'types/users'

import * as S from './styles'

function Home() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <S.Wrapper>
      <S.Users>
        {users?.map(user => (
          <User
            key={user.id}
            name={user.name}
            phone={user.name}
            website={user.website}
            id={user.id}
            company={user.company.name}
            email={user.email}
          />
        ))}
      </S.Users>
    </S.Wrapper>
  )
}

export default Home
