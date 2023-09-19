import './message.css';

import { useState, useEffect } from 'react';

function Message({ msg, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const time = setTimeout(() => {
      setVisible(false);
    }, 3000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(time);
  }, [msg]);
  return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
        {visible && (
            <div className={`message ${type}`}>
                <p>{msg}</p>
            </div>
        )}
        </>

  );
}

export default Message;
