# 🗣 Kek

A supercazzola generator highly inspired by [Polygen](http://www.polygen.org/it/grammatiche/rubriche/ita/ricette.grm)

# Still a work in progress

# Usage

Create a new file with a .kek extension and write your **kek** program using the **kek** syntax:

```kek
S:= Come fosse #Persona in #Luogo mentre #Azione #Oggetto

T:= Persona
  | Antani
  | il Conte Mascetti

T:= Azione
  | prematura
  | fa dudu su

T:= Oggetto
  | la supercazzola
  | il dito indice

T:= Luogo
  | prefettura
  | classe
  | ufficio
```

now run the *kek* interpreter and see the result:

```sh
$ kek ./mykekprogram.kek
```

`Come fosse Antani in ufficio mentre fa dudu su la supercazzola`

you can run it again in order to see a new resuld:

`Come fosse il Conte Mascetti in  prefettura mentre prematura la supercazzola`

`Come fosseil Conte Mascetti inufficio mentreprematurail dito indice`


Have fun!

# License
[MIT](/LICENSE.md)