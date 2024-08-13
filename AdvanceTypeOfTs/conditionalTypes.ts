


// conditional type akhane 1st akta union type declare korlam erpor arekta conditional generic type declare korlam jekhane define korlam generic type T jdi K k extends kore tahole K bad ar nahoi
// T thakbe , akhon ai conditional type k abar arekta type alias e invoke korlam currentBandhobi name akhane removeBandhobi k invoke kore generic type er jaigai age Bandhobi type ar string name
// pathalam 


type Bandhobi = 'Monica' | 'Rachel' | 'Pheobe'

type removeBandhubi<T,K> = T extends K ? never : T

type CurrentBandhobi = removeBandhubi<Bandhobi,'Monica'>