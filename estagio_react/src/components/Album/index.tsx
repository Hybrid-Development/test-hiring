import * as S from './styles'

type AlbumProps = {
  name: string
  onOpenModal: (value: any) => void
}

function Album({ name, onOpenModal }: AlbumProps) {
  return (
    <S.Wrapper>
      <h2>{name}</h2>

      <button onClick={onOpenModal}>Ver albuns</button>
    </S.Wrapper>
  )
}

export default Album
