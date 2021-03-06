import {
  START,
  END,
  FORWARDS,
  BACKWARDS,
  ErrorType,
  EventStoreDBClient
} from "@eventstore/db-client";

export async function readFromStream(client) {
  // region read-from-stream
  const events = await client.readStream("some-stream", {
    direction: FORWARDS,
    fromRevision: START,
    maxCount: 10,
  });
  // endregion read-from-stream

  // #region iterate-stream
  for (var resolvedEvent of events) {
    console.log(resolvedEvent.event.data);
  }
  // #endregion iterate-stream

  return events;
}

export async function readFromStreamPosition(client) {
  // region read-from-stream-position
  const events = await client.readStream("some-stream", {
    direction: FORWARDS,
    fromRevision: BigInt(10),
    maxCount: 20,
  });
  // endregion read-from-stream-position

  // #region iterate-stream
  for (var resolvedEvent of events) {
    console.log(resolvedEvent.event.data);
  }
  // #endregion iterate-stream

  return events;
}

export async function readFromStreamPositionCheck(client) {
  // region checking-for-stream-presence
  let events = [];
  try {
    events = await client.readStream("some-stream", {
      direction: FORWARDS,
      fromRevision: BigInt(10),
      maxCount: 20,
    });
  } catch (error) {
    if (error.type == ErrorType.STREAM_NOT_FOUND) return;

    throw error;
  }

  for (var resolvedEvent of events) {
    console.log(resolvedEvent.event.data);
  }
  // #endregion checking-for-stream-presence

  return events;
}

export async function readFromStreamOverridingCredentials(client) {
  // region overriding-user-credentials
  const credentials = {
    username: "admin",
    password: "changeit",
  };
  const events = await client.readStream("some-stream", {
    direction: FORWARDS,
    fromRevision: START,
    credentials,
    maxCount: 10,
  });
  // endregion overriding-user-credentials

  return events;
}

export async function readFromStreamBackwards(client) {
  // region reading-backwards
  const events = await client.readStream("some-stream", {
    direction: BACKWARDS,
    fromRevision: END,
    maxCount: 10,
  });

  for (var resolvedEvent of events) {
    console.log(resolvedEvent.event.data);
  }
  // #endregion reading-backwards

  return events;
}

export async function readFromAllStream(client) {
  // region read-from-all-stream
  const events = await client.readAll({
    direction: FORWARDS,
    fromPosition: START,
    maxCount: 10,
  });
  // endregion read-from-all-stream

  // #region read-from-all-stream-iterate
  for (var resolvedEvent of events) {
    console.log(resolvedEvent.event.data);
  }
  // #endregion read-from-all-stream-iterate

  return events;
}

export async function ignoreSystemEvents(client) {
  // region ignore-system-events
  const events = await client.readAll({
    direction: FORWARDS,
    fromPosition: START,
    maxCount: 10,
  });

  for (const resolvedEvent of events) {
    if (resolvedEvent.event.type.startsWith("$")) {
      continue;
    }
    console.log(resolvedEvent.event.type);
  }
  // #endregion ignore-system-events

  return events;
}

export async function readFromAllStreamBackwards(client) {
  // region read-from-all-stream-backwards
  const events = await client.readAll({
    direction: BACKWARDS,
    fromPosition: END,
    maxCount: 10,
  });
  // endregion read-from-all-stream-backwards

  // #region read-from-all-stream-iterate
  for (const resolvedEvent of events) {
    console.log(resolvedEvent.event.data);
  }
  // #endregion read-from-all-stream-iterate

  return events;
}

export async function readFromAllOverridingCredentials(client) {
  // region read-all-overriding-user-credentials
  const credentials = {
    username: "admin",
    password: "changeit",
  };
  const events = await client.readAll({
    direction: FORWARDS,
    fromPosition: START,
    credentials,
    maxCount: 10,
  });
  // endregion read-all-overriding-user-credentials

  return events;
}

export async function filterOutSystemEvents(client) {
  // region filter-out-system-events
  const events = await client.readAll({
    direction: FORWARDS,
    fromPosition: START,
    maxCount: 10,
  });

  for (const resolvedEvent of events) {
    if (resolvedEvent.event.type.startsWith("$")) {
      continue;
    }
    console.log(resolvedEvent.event.type);
  }
  // #endregion filter-out-system-events

  return events;
}

export async function readFromAllStreamResolvingLinkTos(client) {
  // region read-from-all-stream-resolving-link-Tos
  const events = await client.readAll({
    direction: BACKWARDS,
    fromPosition: END,
    resolveLinkTos: true,
    maxCount: 10,
  });
  // endregion read-from-all-stream-resolving-link-Tos

  // #region read-from-all-stream-iterate
  for (const resolvedEvent of events) {
    console.log(resolvedEvent.event.data);
  }
  // #endregion read-from-all-stream-iterate

  return events;
}
