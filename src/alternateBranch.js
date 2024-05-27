export function getDiscordAuthUrl() {
  const clientId = '1018337890884931654';
  const scope = 'identify+guilds';
  const redirectUri = encodeURIComponent(process.env.REACT_APP_REDIRECT_URI);

  if (process.env.REACT_APP_ENV === 'development') {
    return `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;
  } else {
    return 'https://discord.com/oauth2/authorize?client_id=1018337890884931654&response_type=code&scope=identify+guilds';
  }
}
