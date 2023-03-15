import { InputProps } from "./index.props";
import { StyledInput } from "./index.styles";

export const Input = ({ initialInput, onInputAdded }: InputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputAdded(event.currentTarget.value);
  };

  return (
    <StyledInput spellCheck={false} value={initialInput} onChange={onChange} />
  );
};
