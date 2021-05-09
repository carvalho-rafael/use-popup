# use-popup

<b>use-popup</b> is a react popup component that let you easily create a popup and control it with flexibility.

## Installing

```bash
npm install use-popup --save
```

or

```bash
yarn add use-popup
```

## Using

You only need to import the use-popup to use it. You can trigger <b>showPopup</b> anywhere in your aplication.   

```jsx
import { useEffect } from 'react';
import usePopup from 'use-popup'

export default function Home() {
  const { Popup, showPopup } = usePopup();

  useEffect(() => {
    showPopup({
      title: 'Error :(',
      message: 'Your reqeuest failed, try again!',
      color: 'red',
      seconds: 5
    })
  }, [])

  return (
    <Popup />
  );
}
```

## Show Your Support

If you enjoyed this project, please [![Star on GitHub][github-star-badge]][github-star] the repo to show your support.
Feel free to give feedback and make a pull request.

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/carvalho-rafael">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/carvalho-rafael">
          </br>
          Rafael Carvalho:
          </br>
          Github
        </a>
        <div>
          <a href="https://www.instagram.com/desenvolvedor.jr/">
            Instagram
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>

[github-star-badge]: https://img.shields.io/github/stars/carvalho-rafael/use-popup.svg?style=social
[github-star]: https://github.com/carvalho-rafael/use-popup/stargazers
