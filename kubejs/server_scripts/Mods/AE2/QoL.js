ServerEvents.recipes(event => {
  //QoL recipes
  miAssembler(event, ["modern_industrialization:styrene_butadiene_rubber", 8], ["ae2:fluix_glass_cable", 8], ["ae2:fluix_covered_cable", 8], 2, 100);
  miAssembler(event, ["modern_industrialization:synthetic_rubber", 40], ["ae2:fluix_glass_cable", 8], ["ae2:fluix_covered_cable", 8], 2, 100);

  event.shapeless("4x ae2:fluix_covered_cable", "ae2:fluix_covered_dense_cable");
  event.shapeless("4x ae2:fluix_smart_cable", "ae2:fluix_smart_dense_cable");

  //AppFlux compat
  miPacker(event, [["appflux:charged_redstone", 1], ["appflux:energy_processor_press", 1, 0]], ["appflux:printed_energy_processor", 1], 8, 200);
  miAssembler(event, ["modern_industrialization:molten_redstone", 90], [["appflux:printed_energy_processor", 1], ["ae2:printed_silicon", 1]], ["appflux:energy_processor", 1], 8, 200);
  miMixer(event, ["minecraft:water", 1000, 0], [["c:storage_blocks/redstone", 1], ["c:gems/fluix", 1], ["c:dusts/glowstone", 1]], null, ["appflux:redstone_crystal", 2], 8, 100);
  miElectrolyzer(event, null, ["appflux:redstone_crystal", 1], null, ["appflux:charged_redstone", 1], 8, 60);
  exAssembler(event, null, [["appflux:printed_energy_processor", 4], ["ae2:printed_silicon", 4], ["#c:dusts/redstone", 4]], ["appflux:energy_processor", 4]);
  exCutter(event, ["appflux:charged_redstone", 9], ["appflux:printed_energy_processor", 9]);

  //ExtendedAE compat
  miAssembler(event, ["modern_industrialization:molten_redstone", 90], [["extendedae:concurrent_processor_print", 1], ["ae2:printed_silicon", 1]], ["extendedae:concurrent_processor", 1], 8, 200);
  miMacerator(event, ["c:gems/entro", 1], ["extendedae:entro_dust", 1], 2, 100);
  miMixer(event, ["minecraft:water", 1000, 0], [["c:dusts/entro", 1], ["c:ingots/gold", 1], ["c:gems/lapis", 1]], null, ["extendedae:entro_ingot", 1], 8, 100);
  miPacker(event, [["c:gems/entro", 1], ["extendedae:concurrent_processor_press", 1, 0]], ["extendedae:concurrent_processor_print", 1], 8, 200);

  event.remove({ id: "modern_industrialization:materials/silicon/unpacker/ingot" }); //Fixes easy silicon exploit
  miUnpacker(event, ["modern_industrialization:silicon_block", 1], ["modern_industrialization:silicon_ingot", 9], 2, 100);

  event.custom({
    type: "mekanism:crushing", input: { tag: "c:gems/entro", count: 1 }, output: { id: "extendedae:entro_dust", count: 1 }
  }).id("craftoria:mekanism/crushing/entro_gem");

  //Megacells compat
  exCutter(event, ["#c:storage_blocks/sky_steel", 1], ["megacells:printed_accumulation_processor", 9]);
  exAssembler(event, null, [["megacells:printed_accumulation_processor", 4], ["ae2:printed_silicon", 4], ["#c:dusts/fluix", 4]], ["megacells:accumulation_processor", 4]);
  exAssembler(event, ["minecraft:lava", 100], [["ae2:charged_certus_quartz_crystal", 4], ["#c:ingots/iron", 4], ["ae2:sky_stone_block", 4]], ["megacells:sky_steel_ingot", 8]);
  exAssembler(event, ["minecraft:lava", 100], [["ae2:charged_certus_quartz_crystal", 4], ["#c:ingots/copper", 4], ["ae2:sky_stone_block", 4]], ["megacells:sky_bronze_ingot", 8]);
  exAssembler(event, ["minecraft:lava", 100], [["ae2:charged_certus_quartz_crystal", 4], ["#c:ingots/osmium", 4], ["ae2:sky_stone_block", 4]], ["megacells:sky_osmium_ingot", 8]);

  //AE2 compat
  event.custom({
    type: "mekanism:crushing", input: { tag: "c:ender_pearls", count: 1 }, output: { id: "ae2:ender_dust", count: 1 }
  }).id("craftoria:mekanism/crushing/ender_pearl");

  //Misc recipes
  exAssembler(event, null, [
    ["ae2:calculation_processor_press", 1],
    ["ae2:engineering_processor_press", 1],
    ["ae2:logic_processor_press", 1],
    ["ae2:silicon_press", 1],
    ["extendedae:concurrent_processor_press", 1],
    ["megacells:accumulation_processor_press", 1],
    ["appflux:energy_processor_press", 1]
  ], ["craftoria:universal_press", 1]);

  event.remove({ output: "extendedae:circuit_cutter" });
  exAssembler(event, null, [
    ["extendedae:machine_frame", 1],
    ["ae2:engineering_processor", 8],
    ["craftoria:universal_press", 1],
    ["minecraft:stonecutter", 1]
  ], ["extendedae:circuit_cutter", 1]);
});