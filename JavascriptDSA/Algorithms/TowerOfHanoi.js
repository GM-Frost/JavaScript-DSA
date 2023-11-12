/** 
* TOWER OF HANOI
*
/
// Problem: Given a 'n ' disk, move the disks from peg A to peg B using peg C.

shift 'n-1' from 'A' to 'B', using 'C' (when Required)  
shift last disk from 'A' to 'C'
shift 'n-1' disk 'B' to 'C', using 'A' (when Required)  .

Use RECURSSIOn
*/

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

//OUTPUT SHOULD BE:

/**
 * Move disk 1 from A to C
 * Move disk 2 from A to B
 * Move disk 1 from C to B
 * Move disk 3 from A to C
 * Move disk 1 from B to A
 * Move disk 2 from B to C
 * Move disk 1 from A to C
 */
