Non-empty `selectable` and non-empty `selected`:

```jsx
<ValuePicker
  title="Colors"
  selectable={[
    { key: "red", value: "Red" },
    { key: "yellow", value: "Yellow" }
  ]}
  selected={[
    { key: "blue", value: "Blue" },
    { key: "green", value: "Green" },
    { key: "black", value: "Black" }
  ]}
  onAddValue={payload => console.log(`onAddValue: ${payload}`)}
  onRemoveValue={payload => console.log(`onRemoveValue: ${payload}`)}
/>
```

Non-empty `selectable` and empty `selected`:

```jsx
<ValuePicker
  title="Colors"
  selectable={[
    { key: "red", value: "Red" },
    { key: "yellow", value: "Yellow" }
  ]}
  selected={[]}
  onAddValue={payload => console.log(`onAddValue: ${payload}`)}
  onRemoveValue={payload => console.log(`onRemoveValue: ${payload}`)}
/>
```

Empty `selectable` and non-empty `selected`:

```jsx
<ValuePicker
  title="Colors"
  selectable={[]}
  selected={[
    { key: "blue", value: "Blue" },
    { key: "green", value: "Green" },
    { key: "black", value: "Black" }
  ]}
  onAddValue={payload => console.log(`onAddValue: ${payload}`)}
  onRemoveValue={payload => console.log(`onRemoveValue: ${payload}`)}
/>
```

Disabled:

```jsx
<ValuePicker
  disabled={true}
  title="Colors"
  selectable={[
    { key: "red", value: "Red" },
    { key: "yellow", value: "Yellow" }
  ]}
  selected={[
    { key: "blue", value: "Blue" },
    { key: "green", value: "Green" },
    { key: "black", value: "Black" }
  ]}
  onAddValue={payload => console.log(`onAddValue: ${payload}`)}
  onRemoveValue={payload => console.log(`onRemoveValue: ${payload}`)}
/>
```
