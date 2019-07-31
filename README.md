## User
- [ ] ID (object ID)
- [ ] Name (STR)
- [ ] Email (email)
- [ ] Username (STR)
- [ ] Password (STR)
- [ ] PizzaSlicesTotal (INT)
- [ ] PizzaSlicesWeekly (INT) (resets to 200 every week)
- [ ] Wins (INT)
- [ ] Loses (INT)
- [ ] Favorite Teams (Array(Object)) (Team Reference)
- [ ] Friends (Array(Object)) (User Reference)
- [ ] Leagues (Array(Object)) (League Reference)
- [ ] Bets (Array(Object)) (Bet Reference)
- [ ] GlobalRank (INT)

## Game Thread
- [ ] ID (object ID)
- [ ] Week (INT)
- [ ] HomeTeam (Object) (Team Reference)
- [ ] AwayTeam (Object) (Team Reference)
- [ ] Bets (Array(Object)) (Bet Reference)
- [ ] Winner (Object)
- [ ] IsFinished (Boolean) 

## Bet
- [ ] ID (object ID)
- [ ] Owner (Object) (User Reference)
- [ ] OnGame (Object) (Game Thread Reference)
- [ ] TeamBetOn (Object) (Team Reference)
- [ ] SlicesBet (INT)

## Team
- [ ] ID (object ID)
- [ ] Name (STR)
- [ ] Wins (INT)
- [ ] Losses (INT)
- [ ] Draws (INT)

## League
- [ ] ID (object ID)
- [ ] Name (STR)
- [ ] Members (Array(Object)) (User Reference)
- [ ] IsActive (Boolean)
- [ ] Ranking (Array(Object)) (User Reference) (Ordered Descending)