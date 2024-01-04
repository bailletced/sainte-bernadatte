-- CreateTable
CREATE TABLE "Tag" (
    "tag_id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("tag_id")
);

-- CreateTable
CREATE TABLE "GroupTagSubscription" (
    "group_tag_subscription_id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupTagSubscription_pkey" PRIMARY KEY ("group_tag_subscription_id")
);

-- CreateTable
CREATE TABLE "Group" (
    "group_id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("group_id")
);

-- CreateTable
CREATE TABLE "dumbModel" (
    "dumbModel_id" TEXT NOT NULL,
    "dumbName" VARCHAR(1000) NOT NULL,

    CONSTRAINT "dumbModel_pkey" PRIMARY KEY ("dumbModel_id")
);

-- AddForeignKey
ALTER TABLE "GroupTagSubscription" ADD CONSTRAINT "GroupTagSubscription_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("group_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupTagSubscription" ADD CONSTRAINT "GroupTagSubscription_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;
