## User
- [ ] ID (object ID)
- [ ] Name (STR)
- [ ] Email (email)
- [ ] Username (STR)
- [ ] Password (STR)

- [ ] Slices of Pizza (INT)
- [ ] Wins (INT)
- [ ] Loses (INT)
- [ ] Favorite Teams (Array(Object)) (Team Reference)
- [ ] Friends (Array(Object)) (User Reference)
- [ ] Leagues (Array(Object)) (League Reference)
- [ ] Wagers (Array(Object)) (Wager Reference)

## Game Thread
- [ ] ID (object ID)
- [ ] HomeTeam (Object) (Team Reference)
- [ ] AwayTeam (Object) (Team Reference)
- [ ] Winner (Object)

## Wager
- [ ] ID (object ID)
- [ ] Owner (Object) (User Reference)
- [ ] OnGame (Object) (Game Thread Reference)
- [ ] TeamWagered (Object) (Team Reference)
- [ ] SlicesWagered (INT)