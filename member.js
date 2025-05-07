function skillsMembers() {
  return {
    name: "members",
    description: "Get members of a guild",
    options: [
      {
        name: "guild_id",
        description: "The ID of the guild to get members from",
        type: 3,
        required: true,
      },
    ],
  };
}