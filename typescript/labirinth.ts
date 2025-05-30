import * as THREE from 'three';
import { Hedge } from './hedge.js'




export function generateLabyrinth()
{
    const scale = 5.0;
    const whole_map: THREE.Group = new THREE.Group();

    const north_main_wall = new Hedge(48 * scale, true);
    north_main_wall.all.position.z = -24 * scale;
    whole_map.add(north_main_wall.all);

    const south_main_wall = new Hedge( 48 * scale,true);
    south_main_wall.all.position.z = 24 * scale;
    whole_map.add(south_main_wall.all)

    const east_main_wall = new Hedge( 48 * scale, false);
    east_main_wall.all.position.x = 24*scale;
    whole_map.add(east_main_wall.all)

    const west_south_main_wall = new Hedge( 16 * scale,false);
    west_south_main_wall.all.position.x = -24 * scale;
    west_south_main_wall.all.position.z = 16 * scale;
    whole_map.add(west_south_main_wall.all);

    const west_north_main_wall = new Hedge( 16 * scale,false);
    west_north_main_wall.all.position.x = -24 * scale;
    west_north_main_wall.all.position.z = -16 * scale;
    whole_map.add(west_north_main_wall.all);

    const west_secondlayer_mainwall = new Hedge (38 * scale, false);
    west_secondlayer_mainwall.all.position.x = -19 * scale;
    whole_map.add(west_secondlayer_mainwall.all);

    const west_thirdlayer_mainwall = new Hedge( 25 * scale, false);
    west_thirdlayer_mainwall.all.position.x = -11 * scale;
    west_thirdlayer_mainwall.all.position.z = 0.5 * scale;
    whole_map.add(west_thirdlayer_mainwall.all)

    const south_east_secondlayer_wall = new Hedge( 16 * scale,true);
    south_east_secondlayer_wall.all.position.z = 19 * scale;
    south_east_secondlayer_wall.all.position.x = 10 * scale;
    whole_map.add(south_east_secondlayer_wall.all);

    const south_west_secondlayer_wall = new Hedge(14 * scale,true);
    south_west_secondlayer_wall.all.position.x = -12 * scale;
    south_west_secondlayer_wall.all.position.z = 19 * scale;
    whole_map.add(south_west_secondlayer_wall.all);

    const objective_west_wall = new Hedge(14 * scale, false);
    objective_west_wall.all.position.x = -7 * scale;
    whole_map.add(objective_west_wall.all);

    const objective_north_wall = new Hedge( 14 * scale, true);
    objective_north_wall.all.position.z = -7 * scale;
    whole_map.add(objective_north_wall.all);

    const objective_south_wall = new Hedge( 21 * scale, true);
    objective_south_wall.all.position.x = 3.5 * scale;
    objective_south_wall.all.position.z = 7 * scale;
    whole_map.add(objective_south_wall.all);

    const objective_outer_east_wall = new Hedge( 18 * scale, false);
    objective_outer_east_wall.all.position.x = 14 * scale;
    objective_outer_east_wall.all.position.z = -2 * scale;
    whole_map.add(objective_outer_east_wall.all);

    const east_bridge_wall = new Hedge ( 12 * scale, false);
    east_bridge_wall.all.position.x = 5 * scale;
    east_bridge_wall.all.position.z = 13 * scale;
    whole_map.add(east_bridge_wall.all);

    const north_thirdlayer_wall = new Hedge ( 12 * scale , true);
    north_thirdlayer_wall.all.position.z = -12 * scale;
    north_thirdlayer_wall.all.position.x = -5 * scale;
    whole_map.add(north_thirdlayer_wall.all);

    const south_thirdlayer_wall = new Hedge ( 16 * scale, true);
    south_thirdlayer_wall.all.position.x = -3 * scale;
    south_thirdlayer_wall.all.position.z = 13 * scale;
    whole_map.add(south_thirdlayer_wall.all);

    const north_secondlayer_wall = new Hedge( 17 * scale, true);
    north_secondlayer_wall.all.position.x = -10.5 * scale;
    north_secondlayer_wall.all.position.z = -19 * scale;
    whole_map.add(north_secondlayer_wall.all);

    const objective_inner_east_wall = new Hedge( 7 * scale, false );
    objective_inner_east_wall.all.position.x = 7 * scale;
    objective_inner_east_wall.all.position.z = -3.5 * scale;
    whole_map.add(objective_inner_east_wall.all);

    const west_secondlayer_smallwall = new Hedge( 5 * scale, false);
    west_secondlayer_smallwall.all.position.x = -2 * scale;
    west_secondlayer_smallwall.all.position.z = -21.5 * scale;
    whole_map.add(west_secondlayer_smallwall.all);

    const east_secondlayer_wall = new Hedge( 17 * scale, false);
    east_secondlayer_wall.all.position.x = 18 * scale;
    east_secondlayer_wall.all.position.z = 10.5 * scale;
    whole_map.add(east_secondlayer_wall.all);

    const east_corner_wall = new Hedge (7.5 * scale,false);
    east_corner_wall.all.position.x = 11 * scale;
    east_corner_wall.all.position.z = -20 * scale;
    whole_map.add(east_corner_wall.all);

    const north_cornet_wall = new Hedge( 9 * scale, true);
    north_cornet_wall.all.position.x = 15.5 * scale;
    north_cornet_wall.all.position.z = -16 * scale;
    whole_map.add(north_cornet_wall.all);

    const south_secondlayer_wall = new Hedge( 6 * scale, true);
    south_secondlayer_wall.all.position.x = 21 * scale;
    south_secondlayer_wall.all.position.z = 2 * scale;
    whole_map.add(south_secondlayer_wall.all);

    console.log()
    whole_map.updateMatrix();
    return whole_map;
}
