<template>
	<section class="container">
		<h2 id="team">The Team</h2>
		<div class="members">
			<NitronTeamMember
				v-for="member in members"
				:key="member.name"
				:name="member.name"
				:position="member.position"
				:headshot="member.headshot"
				:description="member.description"
				:right="members.indexOf(member) % 2 === 1"
			/>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.container {
		background-color: #04aa98;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#team {
		color: white;
		font-size: 4rem;
		align-self: flex-start;
	}
	.members {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	}
</style>

<script lang="ts">
	import { defineComponent } from "vue";
	interface TeamMember {
		name: string;
		position: string;
		headshot: string;
		description: string;
	}

	export default defineComponent({
		async created() {
			const response = await this.$content("team").fetch();
			this.members = (Array.isArray(response) ? response[0].members : response.members) as unknown as TeamMember[];
		},

		data(): { members: TeamMember[] } {return {members: []}},
	});
</script>