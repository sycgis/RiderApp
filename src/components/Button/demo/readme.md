三种样式的按钮，都可以添加icon

![](../../../../ignorePack/button-default.png)
![](../../../../ignorePack/button-primary.png)
![](../../../../ignorePack/button-plain.png)

```jsx
import Button from '@/components/Button';

ReactDOM.render(
  <Fragment>
    <Button title='撤销' type='default' icon={image}  style={styles.btn} />
    <Button title='接单' type='primary' style={styles.btn} />
    <Button title='转单' type='plain' style={styles.btn} />
  </Fragment>,
  mountNode
);
```