var MusicLounge;
(function (MusicLounge) {
    var AsgardRing = (function () {
        function AsgardRing(scene) {
            // Create a particle system
            var particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene);
            this._particleSystem = particleSystem;
            //Texture of each particle
            particleSystem.particleTexture = new BABYLON.Texture('assets/lens4.png', scene);
            // Where the particles come from
            particleSystem.emitter = BABYLON.Vector3.Zero();
            particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...
            // Colors of all particles
            particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
            particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
            // Size of each particle (random between...
            particleSystem.minSize = 2;
            particleSystem.maxSize = 10;
            // Life time of each particle (random between...
            particleSystem.minLifeTime = 01;
            particleSystem.maxLifeTime = 5;
            // Emission rate
            particleSystem.emitRate = 5000;
            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            // Set the gravity of all particles
            particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            // Direction of each particle after it has been emitted
            particleSystem.direction1 = new BABYLON.Vector3(0, 1, 0);
            particleSystem.direction2 = new BABYLON.Vector3(0, 1, 0);
            // Angular speed, in radians
            particleSystem.minAngularSpeed = 0.1;
            particleSystem.maxAngularSpeed = Math.PI;
            // Speed
            particleSystem.minEmitPower = 30;
            particleSystem.maxEmitPower = 200;
            particleSystem.updateSpeed = 0.005;
            var alpha = 0;
            particleSystem.startPositionFunction = function (worldMatrix, position) {
                position.x = 80 * Math.cos(alpha);
                position.y = 0;
                position.z = 80 * Math.sin(alpha);
                alpha += 0.01;
            };
            // Start the particle system
            particleSystem.start();
        }
        return AsgardRing;
    })();
    MusicLounge.AsgardRing = AsgardRing;
})(MusicLounge || (MusicLounge = {}));
//# sourceMappingURL=musicLoung.asgardRing.js.map