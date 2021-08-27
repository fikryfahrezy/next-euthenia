type CompType = {
  id: string;
  type: 'INPUT' | 'SELECT' | 'TEXTAREA' | 'BUTTON';
  input: { type: string; name: string; placeholder: string } | null;
  select: {
    name: string;
    placeholder: string;
    options: { id: string; value: string; text: string }[];
  } | null;
  textarea: { name: string; placeholder: string } | null;
  button: {} | null;
}[];

const components: CompType = [
  {
    id: '1',
    type: 'INPUT',
    input: {
      type: 'text',
      name: 'name',
      placeholder: 'Your Name: *',
    },
    select: null,
    textarea: null,
    button: null,
  },
  {
    id: '2',
    type: 'INPUT',
    input: {
      type: 'email',
      name: 'email',
      placeholder: 'Email: *',
    },
    select: null,
    textarea: null,
    button: null,
  },
  {
    id: '3',
    type: 'INPUT',
    input: {
      type: 'tel',
      name: 'tel',
      placeholder: 'Phone Number:',
    },
    select: null,
    textarea: null,
    button: null,
  },
  {
    id: '4',
    type: 'INPUT',
    input: {
      type: 'text',
      name: 'location',
      placeholder: 'City, Country:',
    },
    select: null,
    textarea: null,
    button: null,
  },
  {
    id: '5',
    type: 'SELECT',
    input: null,
    select: {
      name: 'budget',
      placeholder: 'Budget',
      options: [
        {
          id: '1',
          value: '',
          text: 'Budget',
        },
        {
          id: '2',
          value: '1',
          text: '$2000 - $5000',
        },
        {
          id: '3',
          value: '2',
          text: '$5000 - $10000',
        },
        {
          id: '4',
          value: '3',
          text: '$10000 - $25000',
        },
        {
          id: '5',
          value: '4',
          text: '$25000 - $50000',
        },
        {
          id: '6',
          value: '5',
          text: '$50000 and up',
        },
      ],
    },
    textarea: null,
    button: null,
  },
  {
    id: '6',
    type: 'SELECT',
    input: null,
    select: {
      name: 'intrested',
      placeholder: 'Intrested For',
      options: [
        {
          id: '1',
          value: '',
          text: 'Intrested For',
        },
        {
          id: '2',
          value: '1',
          text: 'Web Design',
        },
        {
          id: '3',
          value: '2',
          text: 'Photography',
        },
        {
          id: '4',
          value: '3',
          text: 'Branding',
        },
        {
          id: '5',
          value: '4',
          text: 'Illustration',
        },
        {
          id: '6',
          value: '5',
          text: 'Motion Design',
        },
        {
          id: '7',
          value: '6',
          text: 'Graphic Design',
        },
      ],
    },
    textarea: null,
    button: null,
  },
  {
    id: '7',
    type: 'INPUT',
    input: {
      type: 'text',
      name: 'name',
      placeholder: 'Company Name:',
    },
    select: null,
    textarea: null,
    button: null,
  },
  {
    id: '8',
    type: 'INPUT',
    input: {
      type: 'text',
      name: 'name',
      placeholder: 'Website:',
    },
    select: null,
    textarea: null,
    button: null,
  },
  {
    id: '9',
    type: 'TEXTAREA',
    input: null,
    select: null,
    textarea: {
      name: 'message',
      placeholder: 'Tell Us Everything *',
    },
    button: null,
  },
  {
    id: '10',
    type: 'BUTTON',
    input: null,
    select: null,
    textarea: null,
    button: null,
  },
];

export default components;
