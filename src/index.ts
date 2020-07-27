export * from "./components/index"
export * from "./systems/index"
export * from "./three/ParticleEmitter"
export * from "./three/ParticleMesh"
export * from "./Keyframes"
export * from "./Math"
//export * from "./Types"
export * from "./Util"

import { isBrowser } from "./Util"

import { World } from "ecsy"
import { ParticleSystem } from "./systems"
import { ParticleEmitter, ParticleEmitterState } from "./components"

const DEFAULT_OPTIONS = {
  mouse: true,
  keyboard: true,
  touchscreen: true,
  gamepad: true,
  debug: false
}

export function initializeParticleSystem(
  world: World,
  options = DEFAULT_OPTIONS
): void {
  if (options.debug) console.log("Initializingg particle system...")

  if (!isBrowser)
    return console.error("Couldn't initialize particles, are you in a browser?")

  if (window && options.debug) (window as any).DEBUG_INPUT = true

  if (options.debug) {
    console.log("Registering particle system with the following options:")
    console.log(options)
  }

  world
    .registerSystem(ParticleSystem)
    .registerComponent(ParticleEmitterState)
    .registerComponent(ParticleEmitter)

  if (options.debug) console.log("INPUT: Registered particle system.")
}
