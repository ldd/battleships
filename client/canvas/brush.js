Brush = function Brush(z, x){
    var cube = new THREE.CubeGeometry( 25, 25, 15, 1, 1, 1  );
    var brushMaterials = [
      new THREE.MeshBasicMaterial( { color: 0x000000, vertexColors: THREE.VertexColors, wireframe: true, wireframeLinewidth: 2 } ),
      new THREE.MeshBasicMaterial( { color: 0xb22222, vertexColors: THREE.VertexColors, wireframe: false, wireframeLinewidth: 4 } )
    ]
        this.brush = THREE.SceneUtils.createMultiMaterialObject( cube, brushMaterials );
        this.brush.isBrush = true
        this.brush.overdraw = true
        this.brush.position.x = -25*14-12.5 + x*25;
        this.brush.position.y = 12.5;
        this.brush.position.z = -25*14-12.5 + z*25;
        this.changeColor = function(color){
            this.brush.children[1].material.color = color;
        }
//        this.brush.matrixAutoUpdate = false
    }

