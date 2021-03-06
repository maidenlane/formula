# Stock Indicators

### Supported data sample:
```
const data = [
  {
    "volume" : 54008,
    "open" : 12.69,
    "high" : 12.69,
    "close" : 12.69,
    "low" : 12.69,
  },
]
```

### Chaikin A/D Line
```
import { ad } from 'technical-indicator'
ad(data)
```

### Chaikin A/D Oscillator
```
import { adosc } from 'technical-indicator'
adosc(shortPeriods, longPeriods)(data)
```

### Chaikin Money Flow
```
import { cmf } from 'technical-indicator'
cmf(periods)(data)
```

### True Range
```
import { tr } from 'technical-indicator'
tr(data)
```

### Avarage True Range
```
import { atr } from 'technical-indicator'
atr(periods)(data)
```

### Bollinger Bands
```
import { boll } from 'technical-indicator'
boll(periods, width)(data)
```

### KDJ
```
import { kdj } from 'technical-indicator'
kdj(slowPeriods, fastPeriods, rsvPeriods)(data)
```
