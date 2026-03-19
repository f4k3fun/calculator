export type Button ={
  input: string
  className?: string
  variants?: 'default' | 'primary'
}


export const listButtons: Button[][] = [
  [
    {input: 'CE'},
    {input: 'C', className: 'flex-1 h-16'},
    {input: '/', variants: 'primary'}
  ],
  [
    { input: '7' },
    { input: '8' },
    { input: '9' },
    { input: '*', variants: 'primary' }
  ], 
  [
    { input: '4' },
    { input: '5' },
    { input: '6' },
    { input: '-', variants: 'primary' }
  ],
  [
  { input: '1' },
  { input: '2' },
  { input: '3' },
  { input: '+', variants: 'primary' }
  ],
  [
  { input: '0', className: 'flex-1 h-16' },
  { input: ',' },
  { input: '=', variants: 'primary' }
  ]
]