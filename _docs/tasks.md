---
title: "Tasks"
summary: "Add, edit, complete, move and delete tasks, including the shortcuts quick-add understands."
order: 1
last_reviewed: 2026-10-21
---

## Add a task

There's an add bar at the bottom of **Today** ("Add a task for today…") and **Inbox** ("Add a task to your inbox…"). Type the title and press Enter.

As soon as you start typing, a row of options opens under the bar:

- **Where it goes:** Inbox, Today, Tomorrow, or a date if you typed one
- **Priority:** Someday, Low, Medium, High, Now
- **Duration:** 5m, 15m, 30m, 45m, 1h, 1h30m
- **Repeat:** see [Repeating tasks]({{ '/docs/repeating-tasks/' | relative_url }})

If you tap an option, it wins over anything quick-add worked out from your typing. If you don't, your defaults apply: 30 minutes, Low priority.

### Shortcuts quick-add understands

You can type these straight into the title. They're taken out of the title once they've been read.

| Type | To get |
|---|---|
| `tomorrow`, `today`, `next week`, `monday`, `next friday`, `in 3 days` | That date |
| `/today`, `/tomorrow`, `/inbox` | Put it straight there |
| `30 minutes`, `30 mins`, `2 hours`, `1.5 hours`, `for 2 hrs` | That duration |
| `now`, `asap`, `critical`, `!!!` | Now priority |
| `high`, `high priority`, `very urgent` | High priority |
| `medium`, `urgent`, `important`, `!!` | Medium priority |
| `low`, `not urgent` | Low priority |
| `someday`, `maybe`, `optional` | Someday priority |
| `#work` | Adds your existing Work tag |

Short forms like `30m` or `1h` aren't read from the title, so use the duration chips for those. Times of day aren't read either.

Priority words are matched as whole words anywhere in the title, so "Call mum now" will come out as a Now task called "Call mum". If that happens, change the priority in the options row before you press Enter.

A `#tag` only adds a tag you already have. It won't create a new one. See [Tags]({{ '/docs/tags/' | relative_url }}).

## Edit a task

- **Inbox:** tap the task.
- **Today:** tap the task to expand it, then tap **Edit**.

The editor has the title, description, duration, priority (Other, Low, Medium, High, Now), tags, when it's planned for, repeat, **Keep in Today until done**, notifications (once it has a due time), subtasks and linked tasks.

Changes save when you leave the title or description field, and when you tap **Save** or close the editor. The title can't be empty.

**Duplicate** at the bottom of the editor makes a copy of the task as it currently stands in the editor.

## Complete a task

Swipe right and tap **Complete**. To undo, tap **Undo** on the snackbar, or swipe right on the completed task and tap **Undo**.

## Move a task between Today and the Inbox

- **On Today:** swipe left and tap **All Tasks** to send it back to the Inbox.
- **In the Inbox:** swipe left and tap **Today** to plan it for today. If it doesn't fit in your capacity, the app tells you.

Either way, the snackbar has an **Undo**.

## Delete a task

- **Swipe:** swipe left and tap **Delete**.
- **Editor:** tap **Delete** at the bottom.
- **Several at once:** long-press a task to start selecting, tap the others, then tap **Delete**.

You get about four seconds to tap **UNDO**. After that the task is gone, and there's no bin to restore it from.

For a repeating task, swipe and editor delete ask whether you mean this one or the whole series. See [Repeating tasks]({{ '/docs/repeating-tasks/' | relative_url }}). Selecting several and deleting them deletes each one's whole series without asking.

If a task has linked tasks, the editor asks whether to delete them too or unlink them first.
