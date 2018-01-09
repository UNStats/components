ValuePicker with non-empty `selectable` values and non-empty `selected` values:

```jsx
<ValuePicker
  title="Colors"
  selectable={[
    { key: 'red', value: 'Red' },
    { key: 'yellow', value: 'Yellow' },
  ]}
  selected={[
    { key: 'blue', value: 'Blue' },
    { key: 'green', value: 'Green' },
    { key: 'black', value: 'Black' },
  ]}
  onAddValue={payload => console.log(`onAddValue: ${payload}`)}
  onRemoveValue={payload => console.log(`onRemoveValue: ${payload}`)}
/>
```

ValuePicker with non-empty `selectable` values and empty `selected` values:

```jsx
<ValuePicker
  title="Colors"
  selectable={[
    { key: 'red', value: 'Red' },
    { key: 'yellow', value: 'Yellow' },
  ]}
  selected={[]}
  onAddValue={payload => console.log(`onAddValue: ${payload}`)}
  onRemoveValue={payload => console.log(`onRemoveValue: ${payload}`)}
/>
```

ValuePicker with empty `selectable` values and non-empty `selected` values:

```jsx
<ValuePicker
  title="Colors"
  selectable={[]}
  selected={[
    { key: 'blue', value: 'Blue' },
    { key: 'green', value: 'Green' },
    { key: 'black', value: 'Black' },
  ]}
  onAddValue={payload => console.log(`onAddValue: ${payload}`)}
  onRemoveValue={payload => console.log(`onRemoveValue: ${payload}`)}
/>
```
