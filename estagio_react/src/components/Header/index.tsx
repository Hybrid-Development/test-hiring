import * as S from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <S.Container>
      <h1>{title}</h1>
    </S.Container>
  );
}
