import * as THREE from 'three';
import { Hedge } from './hedge.js'

const ratio = 10;

function generateLabyrinth()
{
    let whole_map: THREE.Group = new THREE.Group();
    let object_list: [] = [];

    let north_main_wall = new Hedge(50 * ratio);
    north_main_wall.all.position.z = -24 * ratio;
    whole_map.add(north_main_wall.all);

    let south_main_wall = new Hedge(50*ratio);
    south_main_wall.all.position.z = 24*ratio;
    whole_map.add(south_main_wall.all)

    let east_main_wall = new Hedge(50 *ratio);
    east_main_wall.all.position.x = 24*ratio;
    whole_map.add()



}