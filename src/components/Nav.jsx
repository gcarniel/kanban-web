import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const navigate = useNavigate();

  console.log(process.env.REACT_APP_NOVU_IDENTIFIER);

  const onNotificationClick = (notification) => {
    navigate(`/${notification.cta.data.url}`);
  };
  return (
    <nav className="navbar">
      <h3>Minhas Tarefas</h3>
      <div>
        <NovuProvider
          subscriberId={process.env.REACT_APP_NOVU_IDENTIFIER}
          applicationIdentifier={process.env.REACT_APP_NOVU_IDENTIFIER}
        >
          <PopoverNotificationCenter
            onNotificationClick={onNotificationClick}
            colorScheme="light"
          >
            {({ unseenCount }) => (
              <NotificationBell unseenCount={unseenCount} />
            )}
          </PopoverNotificationCenter>
        </NovuProvider>
      </div>
    </nav>
  );
};
