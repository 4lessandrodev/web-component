import Component from './style';

export interface Size {
	size: 'SMALL' | 'MEDIUM' | 'LARGE';
}

interface Props extends Size {
    value: string;
}

export default function Title({ value, size }: Props) {
    return (<Component size={size}>{ value }</Component>);
}
